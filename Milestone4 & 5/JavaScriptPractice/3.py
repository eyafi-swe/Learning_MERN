t = input()
t = int(t)
while(t!=0):

    s = input()
    list1 = s.split('0')

    fullBottel = []
    for x in list1[::-1]:
        if x != '':
            fullBottel.append(x)
    tom = 0

    for x in fullBottel[0::2]:
        tom += len(x)

    print(tom)
    
    t-=1;