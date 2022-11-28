1.   Definiera problemet (vad ska vi göra)
2. Bryta ned (separera)
3. Experimentera (lösa varje enskild del för sig)
4. Kombinera

## 1. I challenges.html ska man kunna klicka på en knapp med texten Filter Challenges.  
   Efter klick så ska 4 st olika filter visas i en boxruta, samt ett kryss
   uppe i högra hörnet i boxrutan; för att återgå till oklickad knapp.

## 2. separera.
A. Skapa en knapp med txt Filter Challenges.
B. Skapa en container (div?) med display flex, som kommer att visas när användare klickar på ovanstående knapp.1
C. Skapa en h3:a som placeras uppe i vänstra hörnet med txt Filter challenges


## 3. experimentera. 
A. Klicka på knapp
   - Hitta knappen i DOM:en
   - Upptäcka när användaren klickar/trycker:
      document.querySelector('.challenge-filters-toggle')
      .addEventListener('click', (ev) => {console.log    ('click!'); ev.preventDefault() })

B. Öppna menyn (toggla synlighet)
C.