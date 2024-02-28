# from pycomm3 import LogixDriver
# import requests
# class HMI:
#     def __init__(self,plc_ip) -> None:
#         self.plcIP = plc_ip
#         self.plc = LogixDriver(self.plcIP)
#     def manual(self):
#         bot1_old_velocity = 0
#         while True:  
#             print("done")          
#             with self.plc as plc:
#                 bot1 = self.update_velocity

#                 if bot1_old_velocity !=bot1:
#                     bot1_old_velocity = bot1
#                     print(f"velo:{bot1}")
#                     plc.write("Velocity[1]", bot1)
#     def update_velocity(self):
#         res = requests.get()

# def main():
#     IP = "192.168.1.10/0"
#     obj = HMI(IP)
#     obj.manual
# if __name__=="__main__":
#     main()