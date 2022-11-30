## 4-stegsmetoden

1. Definiera problemet
2. Bryta ned, separera
3. Experimentera
4. Kombinera


1. När man klickar på en knapp som redan är checked, så ska den knappen "uncheckas" och knappen som har ett value mindre ska få checked.
   Har stjärnan value 1. Så ska ingen knapp få checked.

2. 
    - Lägga till eventListener på label (eftersom att det är den som är den synliga delen i DOM)., gör console.log för att se om labeln registrerar klick.
    - Eventlistener ska vid klick kolla om nuvarande input som är kopplat till labeln är checked
    - Om så är fallet så ska inputen som har ett value mindre än nuvarande input få värdet checked.
    - Är value 1. dvs första stjärnan, så ska ingen stjärna checkas.

3. 