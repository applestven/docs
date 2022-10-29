from flask import Flask
from redis import Redis 
import os
import socket
app = Flask(__name__)
redis = Redis(host=os.environ.get("REDIS_HOST",'127.0.0.1'),post=6379)

@app.route("/")
def hello():
    redis.incr('hits')
    return f"Hello Container World! I have been seen {redis.get('hits').decode('utf-8')} times and my hostname is {socket.gethostname()}.\n"

if __name__ == "__mian__":
    app.run(host=='0.0.0.0' ,port=5000 ,debug=True)    