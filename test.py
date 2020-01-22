import sys
import urllib2

def prRed(skk): print("\033[91m{}\033[00m" .format(skk)) 
def prGreen(skk): print("\033[92m{}\033[00m" .format(skk)) 

url = 'https://www.cs.purdue.edu/homes/cohen53/'
req = urllib2.Request(url)
passed_forbidden_test = True
try: urllib2.urlopen(req)
except urllib2.URLError as e:
    if e.reason.upper() == "FORBIDDEN":
        passed_forbidden_test = False

if passed_forbidden_test:
    prGreen("PASSED")
else:
    prRed("FAILED")

