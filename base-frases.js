let baseDeFrases = [
    {
    nivel: "Fácil",
    numero: "1",
    frase: '"Ahh, soy un pastelito horneado de canela"',
    respuesta: "https://i.ibb.co/CsVxxF6/homero.jpg",
    distractores: ["https://i.ibb.co/5B59htf/bart.jpg",
                    "https://i.ibb.co/HT25WY6/maude-Flanders.jpg" ],
    
    },
    {
        nivel: "Fácil",
        numero: "2",
        frase: '"Yo no lo hices!!"',
        respuesta: "https://i.ibb.co/W5jrZxH/apu.jpg",
        distractores: ["https://i.ibb.co/P6BQbnD/mclure.jpg",
                        "https://i.ibb.co/cQ2qX0f/smiders.jpg" ],
        
    },
    {
        nivel: "Difícil",
        numero: "3",
        frase: '"No me interesa comprar su casa. Pero quisiera utilizar su baño, ojear sus revistas, reordenar sus figuras y manosear su comida de forma antihigiénica. ¡Ja! Ahora saben lo que se siente."',
        respuesta: "https://i.ibb.co/W5jrZxH/apu.jpg",
        distractores: ["https://i.ibb.co/HVx5BFL/bob-pati-o.jpg",
                        "https://i.ibb.co/z6LrGnL/willy.jpg" ],
        
    },
    {
        nivel: "Fácil",
        numero: "4",
        frase: '"Hundiste mi acorazado"',
        respuesta: "https://i.ibb.co/j8Vkm2w/Jasper-Beardsley.jpg",
        distractores: ["https://i.ibb.co/rkvz3JR/rapha.jpg",
                        "https://i.ibb.co/0DwN6RD/reverendo.jpg" ],
        
    },
    {
        nivel: "Fácil",
        numero: "5",
        frase: '"Mi vieja mula ya no es lo que era, ya no es lo que era..."',
        respuesta: "https://i.ibb.co/jkr4T31/El-viejo-jud-o.jpg",
        distractores: ["https://i.ibb.co/rHv8SFB/seymour-Skinner.jpg",
                        "https://i.ibb.co/nrGTzbx/edna.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "6",
        frase: '“¡Que elegancia la de Francia!”',
        respuesta: "https://i.ibb.co/CsVxxF6/homero.jpg",
        distractores: ["https://i.ibb.co/C2XT7bp/kent-Brokman.jpg",
                        "https://i.ibb.co/y0k4SZ4/discoStu.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "7",
        frase: '"¡Soy un unicornio retrasado!"',
        respuesta: "https://i.ibb.co/rkvz3JR/rapha.jpg",
        distractores: ["https://i.ibb.co/sKftp9G/krosty.jpg",
                        "https://i.ibb.co/ZGL8r1J/milhouse.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "8",
        frase: '"¡Bart, deja de molestar a Satanás!"',
        respuesta: "https://i.ibb.co/5jfTd9h/marge.jpg",
        distractores: ["https://i.ibb.co/CsVxxF6/homero.jpg",
                        "https://i.ibb.co/nrGTzbx/edna.jpg"],
        
    },
    {
        nivel: "Medio",
        numero: "9",
        frase: '"Si alguien me necesita estaré en mi alcoba."',
        respuesta: "https://i.ibb.co/CbcWw90/lisa.jpg",
        distractores: ["https://i.ibb.co/BrpW9Wh/todd-flanders.jpg",
                        "https://i.ibb.co/VthQsm7/f77bbd6a7cf3413f865456ead3d1fafe.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "10",
        frase: '"¡Tonterías! Los perros son idiotas, piénsalo Smithers: si yo fuese a tu casa y empezara a oler en tu entrepierna y te lamiera la cara, ¿qué dirías?"',
        respuesta: "https://i.ibb.co/3TTxP87/burns.jpg",
        distractores: ["https://i.ibb.co/C2XT7bp/kent-Brokman.jpg",
                        "https://i.ibb.co/Pwj6nP5/gorgory.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "11",
        frase: '"Siento a la muerte dándome palmadas en el hombro ¡Oh, no, es mi mano!."',
        respuesta: "https://i.ibb.co/smX7y2B/abuelo.jpg",
        distractores: ["https://i.ibb.co/z6LrGnL/willy.jpg",
                        "https://i.ibb.co/1qKL9Sj/danny-El-Mafioso.jpg"],
        
    },
    {
        nivel: "Dificil",
        numero: "12",
        frase: '"Vas por la vida tratando de ser bueno con la gente, tratas de resistirte ante la tentación de golpearlos en la cara, ¿Y todo para qué?"',
        respuesta: "https://i.ibb.co/twRsVYF/Moe.jpg",
        distractores: ["https://i.ibb.co/rHv8SFB/seymour-Skinner.jpg",
                        "https://i.ibb.co/P6BQbnD/mclure.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "13",
        frase: '"Dicen que el alcohol borra la memoria... de lo demás no me acuerdo. "',
        respuesta: "https://i.ibb.co/bHxy4YR/barney.jpg",
        distractores: ["https://i.ibb.co/rkvz3JR/rapha.jpg",
                        "https://i.ibb.co/F8Q011P/404f639c5fe57f6f3931a8055a56e7c0.jpg"],
        
    },
    {
        nivel: "Medio",
        numero: "14",
        frase: '"¡La academia me odia, son una banda de dinosaurios, saben menos de television que de los pelos que tienen en las (mira a camara)... eh, hooooolaaaa!"',
        respuesta: "https://i.ibb.co/sKftp9G/krosty.jpg",
        distractores: ["https://i.ibb.co/HVx5BFL/bob-pati-o.jpg",
                        "https://i.ibb.co/HxnDNHh/duffman.jpg"],
        
    },
    {
        nivel: "Medio",
        numero: "15",
        frase: '""He hecho todo lo que dice la Biblia, hasta esas cosas que contradicen a las otras cosas""',
        respuesta: "https://i.ibb.co/28gGmJx/ned-Fladers.jpg",
        distractores: ["https://i.ibb.co/9H4x1SY/414c16709066a4d10384af0ddbce9b9e.jpg",
                        "https://i.ibb.co/q7yG9v2/a1be69675d1929a3786decf68bff3382.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "16",
        frase: '"¿Te acuerdas de Alf? ¡Ha vuelto! ¡Y en forma de fichas!"',
        respuesta: "https://i.ibb.co/ZGL8r1J/milhouse.jpg",
        distractores: ["https://i.ibb.co/YRj0pXC/ron.jpg",
                        "https://i.ibb.co/5B59htf/bart.jpg"],
        
    },
    {
        nivel: "Dificil",
        numero: "17",
        frase: '"Les atacaré donde no podáis protegerlos, ¡En sus sueños!"',
        respuesta: "https://i.ibb.co/z6LrGnL/willy.jpg",
        distractores: ["https://i.ibb.co/1qKL9Sj/danny-El-Mafioso.jpg",
                        "https://i.ibb.co/p2PYKJ4/juez.jpg"],
        
    },
    {
        nivel: "Medio",
        numero: "18",
        frase: '"“Para empezar, presionar cualquier tecla”, ¿Dónde está la tecla cualquier?"',
        respuesta: "https://i.ibb.co/CsVxxF6/homero.jpg",
        distractores: ["https://i.ibb.co/d6Z7DzX/hombre-Topo.jpg",
                        "https://i.ibb.co/0DwN6RD/reverendo.jpg"],
        
    },
    {
        nivel: "Fácil",
        numero: "19",
        frase: 'Ned, ¿has pensado en otras religiones? Todas son más o menos lo mismo"',
        respuesta: "https://i.ibb.co/0DwN6RD/reverendo.jpg",
        distractores: ["https://i.ibb.co/Bs9q47z/4a7fe2e1f8c82e3bd75bc12c35249b8f.jpg",
                        "https://i.ibb.co/zRmM8vz/51e6117895dfb3eed398f24f022e104b.jpg"],
        
    },
    {
        nivel: "Dificil",
        numero: "20",
        frase: '"Bueno, lo cierto es que si usé vestido buena parte de los 40s..... ¡OH, QUE DISEÑADORES HABÍA!"',
        respuesta: "https://i.ibb.co/smX7y2B/abuelo.jpg",
        distractores: ["https://i.ibb.co/j8Vkm2w/Jasper-Beardsley.jpg",
                        "https://i.ibb.co/cQ2qX0f/smiders.jpg"],
        
    },

]