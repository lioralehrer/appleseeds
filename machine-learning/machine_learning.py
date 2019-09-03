from sklearn.neighbors import KNeighborsClassifier 


PEACH = 0
PLUM = 1

weight_in_gr = 100
color = 10
height_in_cm = 15
PEACH_1 = [weight_in_gr , color ,height_in_cm ]

weight_in_gr = 90
color = 9.5
height_in_cm = 14
PEACH_2 = [weight_in_gr , color ,height_in_cm ]

weight_in_gr = 50
color = 5
height_in_cm = 15
PLUM_1 = [weight_in_gr , color ,height_in_cm ]

weight_in_gr = 60
color = 5.5
height_in_cm = 15
PLUM_2 = [weight_in_gr , color ,height_in_cm ]

featcher=[PEACH_1 , PEACH_2 ,PLUM_1,PLUM_2]
labels= [PEACH, PEACH, PLUM,PLUM]

classifier = KNeighborsClassifier(1)
classifier.fit(featcher, labels)


weight_in_gr = 59
color = 5.5
height_in_cm = 15
PLUM_3 = [weight_in_gr , color ,height_in_cm ]

if classifier.predict ([PLUM_3])== 1:
    print("plum")
else: 
    print("peach")