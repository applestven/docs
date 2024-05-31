

## 前端部署脚本示例 测试环境

```shell
#!/bin/bash

BASE_REPO="/mnt_data_01/repo/sgstore/sg-live-admin"
PACK_DIR="/mnt_data_01/frontend/backup"
FRONTEND_BASE_DIR="/mnt_data_01/frontend"
DEP_LOG_FILE="/mnt_data_01/frontend/deploy.log"
DEPLOYER_LIST=""


function branch_input() {
    # Before: cd to git repository
    # Return ${branch}
    git fetch

    echo -e "\033[1;32m--------------------------------- branch confirm ----------------------------------------\033[0m"
    echo "Branches: $(git for-each-ref --count=30 --sort=-committerdate refs/heads/ --format='%(refname:short)' | xargs)"
    default_branch=$(git rev-parse --abbrev-ref HEAD)
    echo -e "输入需要部署的分支，回车默认 <\033[1;32m${default_branch}\033[0m>:"
    read -t 10 branch

    branch=${branch:-"$default_branch"}
    [[ -z ${branch} ]] && echo "Error: empty branch." && exit 1
    echo "Your Branch: $branch"
    echo -e "\033[1;32m--------------------------------- branch confirm ----------------------------------------\033[0m"
}

function log_file() {
    # param1 = msg to log
    echo "$(date +'%Y%m%d %H:%M:%S')[INFO]$1" >> ${DEP_LOG_FILE}
}

function trap_interrupt() {
    log_file "用户中断部署"
}

function deployer_select() {
    echo "Who are you?"
    select deployer in ${DEPLOYER_LIST}
    do
        [[ -z ${deployer} ]] && echo "Error input" && exit 1
        log_file "Creating deployment job by ${deployer} -----------------------------------------------------------"
        break
    done
}

# deployer_select
#trap trap_interrupt INT

branch=
PROJ_CORE=
list="sadmin agent-admin"
echo "需要部署哪个后台？输入编号确认："
select proj in ${list}
do
   [[ -z ${proj} ]] && echo "Error input" && exit 1
   PROJ_CORE=${proj}
   break
done

pack_script=
if [[ "sadmin" == "${PROJ_CORE}" ]]
then
  pack_script="npm run build"
elif [[ "agent-admin" == "${PROJ_CORE}" ]]
then
  pack_script="npm run build:agent"
else
  echo "项目选择错误"
  exit 1
fi

PROJ_PACK_DIR="${PACK_DIR}/${PROJ_CORE}"
PROJ_DEP_DIR="${FRONTEND_BASE_DIR}/${PROJ_CORE}"

echo -e "Selected: \033[1;32m${PROJ_CORE}\033[0m "

cd ${BASE_REPO} || exit  1

branch_input

git checkout ${branch}
git pull origin ${branch}

date_postfix=$(date +'%Y%m%d_%H%M%S')

read -t 10 -p "是否需要npm install? 回车默认否，输入：Y/[N]: " do_npm_install
do_npm_install=${do_npm_install:-Y}
if [[ ${do_npm_install} == Y || ${do_npm_install} == y ]]
then
  npm install
fi

${pack_script}
if [[ 0 -eq $? ]]
then
    log_file "Deploying project: ${PROJ_CORE}, pack script: ${pack_script}, branch: ${branch}, package result: success"
else
    log_file "Deploying project: ${PROJ_CORE}, pack script: ${pack_script}, branch: ${branch}, package result: failure"
    log_file "-----------------------------------------------------------------------"
    exit 1
fi

echo "Package Done --------------------"
[[ ! -d ${PROJ_PACK_DIR} ]] && mkdir -p ${PROJ_PACK_DIR}

backup_dir="${PROJ_PACK_DIR}/${date_postfix}"
echo "Backup dist: ${PROJ_CORE} --> ${backup_dir}"

cp -r dist ${backup_dir}

log_file "Deploying package: ${backup_dir} -------------------------------------------------"
echo "Deploying pack: ${backup_dir}"
cp -rf ${backup_dir}/* "${PROJ_DEP_DIR}"

echo "Everything is done."
```

<!-- ```shell
#!/bin/bash

# 定义要部署的文件夹
deploy_folder="dist"

# 定义测试环境的目标服务器
target_server="root@test.com"

# 定义测试环境的部署目录
target_directory="/var/www/html/test"

# 定义测试环境的目标文件夹
target_deploy_folder="${target_directory}/${deploy_folder}"

``` -->
