import { Injectable } from '@angular/core';
import { StoryModel } from '../models/story.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoryService {
    private stories: StoryModel[] = [
        {
            id: 3,
            author: {
                id: 3,
                name: 'Philip K. Dick',
                nationality:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png',
                biography: [
                    '(Chicago, 1928 - Santa Ana, 1982). Philip Kindred Dick fue un escritor y novelista estadounidense de ciencia ficción, teniendo gran influencia en el desarrollo del género durante el siglo XX. Su novela más famosa, "¿Sueñan los Androides con Ovejas Eléctricas? fue adaptada al cine en el film Blade Runner (1982)',
                ],
                fullBioUrl: 'https://www.biografias.es/famosos/philip-k-dick.html',
                imgString: 'https://imagessl.casadellibro.com/img/autores/20165.jpg',
            },
            title: 'Algunas Peculiaridades de los Ojos',
            day: 3,
            prologues: [],
            summary: [
                '"Algunas Peculiaridades de los Ojos" (título original "The Eyes Have It") fue publicada en 1953 en la revista "Science Fiction Stories". Fiel a su estilo, y añadiendo cuotas de paranoia y humor, en este cuento Dick juega con la perecepción tanto del lector como la de los personajes; relatando en este caso una lucha psicológica del protagonista — quien realmente está convencido que los extraterrestres están entre nosotros.',
            ],
            paragraphs: [
                {
                    text: 'Descubrí por puro accidente que la Tierra había sido invadida por una forma de vida procedente de otro planeta. Sin embargo, aún no he hecho nada al respecto; no se me ocurre qué. Escribí al gobierno, y en respuesta me enviaron un folleto sobre la reparación y mantenimiento de las casas de madera. En cualquier caso, es de conocimiento general; no soy el primero que lo ha descubierto. Hasta es posible que la situación esté controlada.',
                },
                {
                    text: 'Estaba sentado en mi butaca, pasando las páginas de un libro de bolsillo que alguien había olvidado en el autobús, cuando topé con la referencia que me puso en la pista. Por un momento, no reaccioné. Tardé un rato en comprender su importancia. Cuando la asimilé, me pareció extraño que no hubiera reparado en ella de inmediato.',
                },
                {
                    text: 'Era una clara referencia a una especie no humana, extraterrestre, de increíbles características. Una especie, me apresuro a señalar, que adopta el aspecto de seres humanos normales. Sin embargo, las siguientes observaciones del autor no tardaron en desenmascarar su auténtica naturaleza. Comprendí en seguida que el autor lo sabía todo. Lo sabía todo, pero se lo tomaba con extraordinaria tranquilidad. La frase (aún tiemblo al recordarla) decía:',
                },
                { text: '… sus ojos pasearon lentamente por la habitación.', italics: true },
                {
                    text: 'Vagos escalofríos me asaltaron. Intenté imaginarme los ojos. ¿Rodaban como monedas? El fragmento indicaba que no; daba la impresión que se movían por el aire, no sobre la superficie. En apariencia, con cierta rapidez. Ningún personaje del relato se mostraba sorprendido. Eso es lo que más me intrigó. Ni la menor señal de estupor ante algo tan atroz. Después, los detalles se ampliaban.',
                },
                { text: '… sus ojos se movieron de una persona a otra.', italics: true },
                {
                    text: 'Lacónico, pero definitivo. Los ojos se habían separado del cuerpo y tenían autonomía propia. Mi corazón latió con violencia y me quedé sin aliento. Había descubierto por casualidad la mención a una raza desconocida. Extraterrestre, desde luego. No obstante, todo resultaba perfectamente natural a los personajes del libro, lo cual sugería que pertenecían a la misma especie.',
                },
                {
                    text: '¿Y el autor? Una sospecha empezó a formarse en mi mente. El autor se lo tomaba con demasiada tranquilidad. Era evidente que lo consideraba de lo más normal. En ningún momento intentaba ocultar lo que sabía. El relato proseguía:',
                },
                { text: '… a continuación, sus ojos acariciaron a Julia.', italics: true },
                {
                    text: 'Julia, por ser una dama, tuvo el mínimo decoro de experimentar indignación. La descripción revelaba que enrojecía y arqueaba las cejas en señal de irritación. Suspiré aliviado. No todos eran extraterrestres. La narración continuaba:',
                },
                { text: '… sus ojos, con toda parsimonia, examinaron cada centímetro de la joven.', italics: true },
                {
                    text: '¡Santo Dios! En este punto, por suerte, la chica daba media vuelta y se largaba, poniendo fin a la situación. Me recliné en la butaca, horrorizado. Mi esposa y mi familia me miraron, asombrados.',
                },
                { text: '-¿Qué pasa, querido? -preguntó mi mujer.' },
                {
                    text: 'No podía decírselo. Revelaciones como ésta serían demasiado para una persona corriente. Debía guardar el secreto.',
                },
                { text: '-Nada -respondí, con voz estrangulada.' },
                { text: 'Me levanté, cerré el libro de golpe y salí de la sala a toda prisa.' },
                {
                    text: 'Seguí leyendo en el garaje. Había más. Leí el siguiente párrafo, temblando de pies a cabeza:',
                },
                {
                    text: '… su brazo rodeó a Julia. Al instante, ella pidió que se lo quitara, cosa a la que él accedió de inmediato, sonriente.',
                    italics: true,
                },
                {
                    text: 'No consta qué fue del brazo después que el tipo se lo quitara. Quizá se quedó apoyado en la pared, o lo tiró a la basura. Da igual en cualquier caso, el significado era diáfano.',
                },
                {
                    text: 'Era una raza de seres capaces de quitarse partes de su anatomía a voluntad. Ojos, brazos…, y tal vez más. Sin pestañear. En este punto, mis conocimientos de biología me resultaron muy útiles. Era obvio que se trataba de seres simples, unicelulares, una especie de seres primitivos compuestos por una sola célula. Seres no más desarrollados que una estrella de mar. Estos animalitos pueden hacer lo mismo.',
                },
                {
                    text: 'Seguí con mi lectura. Y entonces topé con esta increíble revelación, expuesta con toda frialdad por el autor, sin que su mano temblara lo más mínimo:',
                },

                {
                    text: '… nos dividimos ante el cine. Una parte entró, y la otra se dirigió al restaurante para cenar.',
                    italics: true,
                },
                {
                    text: 'Fisión binaria, sin duda. Se dividían por la mitad y formaban dos entidades. Existía la posibilidad que las partes inferiores fueran al restaurante, pues estaba más lejos, y las superiores al cine. Continué leyendo, con manos temblorosas. Había descubierto algo importante. Mi mente vaciló cuando leí este párrafo:',
                },

                { text: '… temo que no hay duda. El pobre Bibney ha vuelto a perder la cabeza.', italics: true },

                { text: 'Al cual seguía:' },
                { text: '… y Bob dice que no tiene entrañas.', italics: true },
                {
                    text: 'Pero Bibney se las ingeniaba tan bien como el siguiente personaje. Éste, no obstante, era igual de extraño. No tarda en ser descrito como:',
                },
                { text: '… carente por completo de cerebro.', italics: true },
                {
                    text: 'El siguiente párrafo despejaba toda duda. Julia, que hasta el momento me había parecido una persona normal se revela también como una forma de vida extraterrestre, similar al resto:',
                },
                { text: '… con toda deliberación, Julia había entregado su corazón al joven.', italics: true },
                {
                    text: 'No descubrí a qué fin había sido destinado el órgano, pero daba igual. Resultaba evidente que Julia se había decidido a vivir a su manera habitual, como los demás personajes del libro. Sin corazón, brazos, ojos, cerebro, vísceras, dividiéndose en dos cuando la situación lo requería. Sin escrúpulos.',
                },
                { text: '… a continuación le dio la mano.', italics: true },
                {
                    text: 'Me horroricé. El muy canalla no se conformaba con su corazón, también se quedaba con su mano. Me estremezco al pensar en lo que habrá hecho con ambos, a estas alturas.',
                },
                { text: '… tomó su brazo.', italics: true },
                {
                    text: 'Sin reparo ni consideración, había pasado a la acción y procedía a desmembrarla sin más. Rojo como un tomate, cerré el libro y me levanté, pero no a tiempo de soslayar la última referencia a esos fragmentos de anatomía tan despreocupados, cuyos viajes me habían puesto en la pista desde un principio:',
                },
                { text: '… sus ojos le siguieron por la carretera y mientras cruzaba el prado.', italics: true },
                {
                    text: 'Salí como un rayo del garaje y me metí en la bien caldeada casa, como si aquellas detestables cosas me persiguieran. Mi mujer y mis hijos jugaban a Monopoly en la cocina. Me uní a la partida y jugué con frenético entusiasmo. Me sentía febril y los dientes me castañeteaban.',
                },
                {
                    text: 'Ya había tenido bastante. No quiero saber nada más de eso. Que vengan. Que invadan la Tierra. No quiero mezclarme en ese asunto.',
                },
                { text: 'No tengo estómago para esas cosas.' },
            ],
        },
        {
            id: 2,
            author: {
                id: 2,
                name: 'Liliana Bodoc',
                nationality:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png',
                biography: [
                    '(Santa Fe, 1958 - Mendoza, 2018). Liliana Bodoc fue una escritora y poeta argentina especializada en literatura juvenil e infantil. Estudió letras en la Universidad de Cuyo, desempeñándose allí como docente. Su obra en prosa más famosa es la trilogía de la "Saga de los Confines"',
                ],
                fullBioUrl: 'https://www.biografias.es/famosos/liliana-bodoc.html',
                imgString: 'https://i.ibb.co/bbK5JMM/Liliana-Bodoc.jpg',
            },
            title: 'Amigos por el Viento',
            day: 2,
            prologues: [],
            summary: [
                '"Amigos en el Viento" es parte de la colección de cuentos homónima, la cual consta de 7 relatos que abordan las pérdidas, los conflictos propios de la adolescencia y los efectos, a veces impensados, que tiene enamorarse. Fue publicado en 2011',
            ],
            paragraphs: [
                {
                    text: 'A veces, la vida se comporta como el viento: desordena y arrasa. Algo susurra, pero no se Ie entiende. A su paso todo peligra; hasta aquello que tiene raíces. Los edificios, por ejemplo. O las costumbres cotidianas.',
                },
                {
                    text: 'Cuando la vida se comporta de ese modo, se nos ensucian los ojos con los que vemos. Es decir, los verdaderos ojos. A nuestro lado, pasan papeles escritos con una letra que creemos reconocer. EI cielo se mueve más rápido que las horas. Y lo peor es que nadie sabe si, alguna vez, regresará la calma.',
                },
                {
                    text: 'Así ocurrió el día que papá se fue de casa. La vida se nos transformó en viento casi sin dar aviso. Recuerdo la puerta que se cerró detrás de su sombra y sus valijas. También puedo recordar la ropa reseca sacudiéndose al sol mientras mamá cerraba las ventanas para que, adentro y adentro, algo quedara en su sitio.',
                },
                { text: '-Le dije a Ricardo que viniera con su hijo. ¿Qué te parece?' },
                { text: '-Me parece bien -mentí.' },
                { text: 'Mama dejó de pulir la bandeja, y me miró:' },
                { text: '-No me lo estás diciendo muy convencida' },
                { text: '-Yo no tengo que estar convencida.' },
                { text: '-¿Y eso que significa? -preguntó la mujer que más preguntas me hizo a lo largo de mi vida.' },
                { text: 'Me vi obligada a levantar los ojos del libro:' },
                { text: '-Significa que es tu cumpleaños, y no el mío -respondí.' },
                { text: 'La gata salió de su canasto, y fue a enredarse entre las piernas de mamá.' },
                {
                    text: 'Que mamá tuviera novio era casi insoportable. Pero que ese novio tuviera un hijo era una verdadera amenaza. Otra vez, un peligro rondaba mi vida. Otra vez había viento en el horizonte.',
                },
                { text: '-Se van a entender bien -dijo mamá-. Juanjo tiene tu edad.' },
                {
                    text: 'La gata, único ser que entendía mi desolación, salta sabre mis rodillas. Gracias, gatita buena.',
                },
                {
                    text: 'Habían pasado varios años desde aquel viento que se Ilevó a papá. En casa ya estaban reparados los daños. Los huecos de la biblioteca fueron ocupados con nuevos libros. Y hacía mucho que yo no encontraba gotas de Ilanto escondidas en los jarrones, disimuladas como estalactitas en el congelador. Disfrazadas de pedacitos de cristal. "Se me acaba de romper una copa ", inventaba mamá que, con tal de ocultarme su tristeza, era capaz de esas y otras asombrosas hechicerías.',
                },
                {
                    text: 'Ya no había huellas de viento ni de Ilantos. Y justo cuando empezábamos a reírnos con ganas y a pasear juntas en bicicleta, aparecía un tal Ricardo y todo volvía a peligrar.',
                },
                {
                    text: 'Mamá sacó las cocadas del horno. Antes del viento, ella las hacía cada domingo. Después pareció tomarle rencor a la receta, porque se molestaba con la sola mención del asunto. Ahora, el tal Ricardo y su Juanjo habían conseguido que volviera a hacerlas. Algo que yo no pude conseguir.',
                },
                {
                    text: '-Me voy a arreglar un poco -dijo mamá, mirándose las manos-. Lo único que falta es que lIeguen y me encuentren hecha un desastre.',
                },
                { text: '-¿Qué te vas a poner? -Ie pregunté, en un supremo esfuerzo de amor.' },
                {
                    text: '-EI vestido azul. Mamá salió de la cocina, la gata regresó a su canasta. Y yo me quedé sola para imaginar lo que me esperaba.',
                },
                {
                    text: 'Seguramente, ese horrible Juanjo iba a devorar las cocadas. Y los pedacitos de merengue se quedarían pegados en los costados de su boca. También era seguro que iba a dejar sucio el jabón cuando se lavara las manos. Iba a hablar de su perro con el único propósito de desmerecer a mi gata.',
                },
                {
                    text: 'Pude verlo transitando por mi casa con los cordones de las zapatillas desatados, tratando de anticipar la manera de quedarse con mi dormitorio. Pero, más que ninguna otra cosa, me aterró la certeza de que sería uno de esos chicos que, en vez de hablar, hacen ruidos: frenadas de autos, golpes en el estómago, sirenas de bomberos, ametralladoras y explosiones.',
                },
                { text: '-¡Mama! - grité, pegada a la puerta del baño.' },
                { text: '-¿Qué pasa? -me respondió desde la ducha.' },
                { text: '-¿Cómo se lIaman esas palabras que parecen ruidos?' },
                {
                    text: 'EI agua caía apenas tibia, mamá intentaba comprender mi pregunta, la gata dormía y yo esperaba.',
                },
                { text: '-¿Palabras que parecen ruidos? -repitió.' },
                { text: '-Sí -y aclaré-: Pum, Plal, Ugg...' },
                { text: 'iRing!' },
                { text: '-Por favor -dijo mamá-, están lIamando.' },
                { text: 'No tuve más remedio que abrir la puerta.' },
                { text: '-¡Holal -dijo Ricardo, asomado detrás de las rosas.' },
                {
                    text: 'Yo miré a su hijo sin piedad. Como lo había imaginado, traía puesta una remera ridícula y un pantalón que Ie quedaba corto.',
                },
                {
                    text: 'Enseguida, apareció mamá. Estaba tan linda como si no se hubiese arreglado. Así Ie pasaba a ella. Y el azul Ie quedaba muy bien a sus cejas espesas.',
                },
                {
                    text: '-Podrían ir a escuchar música a tu habitación - sugirió la mujer que cumplía años, desesperada por la falta de aire.',
                },
                { text: 'Y es que yo me lo había tragado todo para matar por asfixia a los invitados.' },
                {
                    text: 'Cumplí sin quejarme. EI horrible chico me siguió en silencio. Me senté en una cama. EI se sentó en la otra. Sin duda, ya estaría decidiendo que el dormitorio pronto sería de su propiedad. Y que yo dormiría en el canasto, junto a la gata.',
                },
                {
                    text: 'No puse música porque no tenía nada que festejar. Aquel era un día triste para mí. No me pareció justo, y decidí que también el debía sufrir. Entonces, busqué una espina y la puse entre signos de pregunta:',
                },
                { text: '-¿Cuánto hace que se murió tu mamá?' },
                { text: 'Juanjo abrió grandes los ojos para disimular algo.' },
                { text: '-Cuatro años -contesto.' },
                { text: 'Pero mi rabia no se conformó con eso:' },
                { text: '-¿Y cómo fue? -volví a preguntar.' },
                { text: 'Esta vez, entrecerró los ojos.' },
                { text: 'Yo esperaba oír cualquier respuesta, menos la que lIegó desde su voz cortada.' },
                { text: '-Fue..., fue como un viento -dijo.' },
                {
                    text: 'Agaché la cabeza, y dejé salir el aire que tenía guardado. Juanjo estaba hablando del viento, ¿sería el mismo que pasó por mi vida?',
                },
                { text: '-¿Es un viento que lIega de repente y se mete en todos lados? -pregunte.' },
                { text: '-Sí, es ese.' },
                { text: '-¿Y también susurra...?' },
                { text: '-Mi viento susurraba -dijo Juanjo-. Pero no entendí lo que decía.' },
                { text: '-Yo tampoco entendí.' },
                { text: 'Los dos vientos se mezclaron en mi cabeza.' },
                { text: 'Pasó un silencio.' },
                {
                    text: '-Un viento tan fuerte que movió los edificios -dijo él-. Y eso que los edificios tienen raíces...',
                },
                { text: 'Pasó una respiración.' },
                { text: '-A mí se me ensuciaron los ojos -dije.' },
                { text: 'Pasaron dos.' },
                { text: '-A mi también.' },
                { text: '-¿Tu papá cerró las ventanas? -pregunté.' },
                { text: '-Sí.' },
                { text: '-Mi mamá también.' },
                { text: '-¿Por qué lo habrán hecho? -Juanjo parecía asustado.' },
                { text: '-Debe haber sido para que algo quedara en su sitio.' },
                {
                    text: 'A veces, la vida se comporta como el viento: desordena y arrasa. Algo susurra, pero no se Ie entiende. A su paso todo peligra; hasta aquello que tiene raíces. Los edificios, por ejemplo. O las costumbres cotidianas.',
                },
                { text: '-Si querés vamos a comer cocadas -Ie dije.' },
                {
                    text: 'Porque Juanjo y yo teníamos un viento en común. Y quizás ya era tiempo de abrir las ventanas. ',
                },
            ],
        },
        {
            id: 1,
            author: {
                id: 1,
                name: 'Horacio Quiroga',
                nationality:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/2560px-Flag_of_Uruguay.svg.png',
                biography: [
                    '(Salto, 1878 - Buenos Aires, 1937). Narrador uruguayo radicado en Argentina. Se lo considera uno los maestros del cuento latinoamericano, de prosa vívida, naturalista y modernista. Sus relatos a menudo retratan a la naturaleza bajo rasgos temibles y horrorosos, como enemiga de las circunstancias del ser humano.',
                ],
                fullBioUrl: 'https://www.biografiasyvidas.com/biografia/q/quiroga_horacio.html',
                imgString:
                    'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RD4B5FA2EZECNBZ6UXMRQOL66A.jpg',
            },
            title: 'A La Deriva',
            day: 1,
            prologues: [],
            summary: [
                '"A La Deriva" es parte de la obra "Cuentos de amor de locura y de muerte", publicada en 1917. Esta colección cuenta con 18 relatos, entre los que también se incluyen los clásicos "El almohadón de plumas" y "La gallina degollada".',
            ],
            paragraphs: [
                {
                    text:
                        'El hombre pisó algo blanduzco, y en seguida sintió la mordedura en el pie. Saltó \n' +
                        'adelante, y al volverse con un juramento vio una yararacusú que arrollada sobre sí \n' +
                        'misma esperaba otro ataque.',
                },
                {
                    text:
                        'El hombre echó una veloz ojeada a su pie, donde dos gotitas de sangre engrosaban \n' +
                        'dificultosamente, y sacó el machete de la cintura. La víbora vio la amenaza, y \n' +
                        'hundió más la cabeza en el centro mismo de su espiral; pero el machete cayó de \n' +
                        'lomo, dislocándole las vértebras.',
                },
                {
                    text:
                        'El hombre se bajó hasta la mordedura, quitó las gotitas de sangre, y durante un \n' +
                        'instante contempló. Un dolor agudo nacía de los dos puntitos violetas, y \n' +
                        'comenzaba a invadir todo el pie. Apresuradamente se ligó el tobillo con su pañuelo \n' +
                        'y siguió por la picada hacia su rancho \n' +
                        'El dolor en el pie aumentaba, con sensación de tirante abultamiento, y de pronto el \n' +
                        'hombre sintió dos o tres fulgurantes puntadas que como relámpagos habían \n' +
                        'irradiado desde la herida hasta la mitad de la pantorrilla. Movía la pierna con \n' +
                        'dificultad; una metálica sequedad de garganta, seguida de sed quemante, le arrancó \n' +
                        'un nuevo juramento.',
                },
                {
                    text:
                        'Llegó por fin al rancho, y se echó de brazos sobre la rueda de un trapiche. Los dos \n' +
                        'puntitos violeta desaparecían ahora en la monstruosa hinchazón del pie entero. La \n' +
                        'piel parecía adelgazada y a punto de ceder, de tensa. Quiso llamar a su mujer, y la \n' +
                        'voz se quebró en un ronco arrastre de garganta reseca. La sed lo devoraba.',
                },
                {
                    text:
                        '—¡Dorotea! —alcanzó a lanzar en un estertor—. ¡Dame caña! \n' +
                        'Su mujer corrió con un vaso lleno, que el hombre sorbió en tres tragos. Pero no \n' +
                        'había sentido gusto alguno. \n' +
                        '—¡Te pedí caña, no agua! —rugió de nuevo. ¡Dame caña! \n' +
                        '—¡Pero es caña, Paulino! —protestó la mujer espantada. \n' +
                        '—¡No, me diste agua! ¡Quiero caña, te digo! \n' +
                        'La mujer corrió otra vez, volviendo con la damajuana. El hombre tragó uno tras \n' +
                        'otro dos vasos, pero no sintió nada en la garganta.\n' +
                        '—Bueno; esto se pone feo —murmuró entonces, mirando su pie lívido y ya con \n' +
                        'lustre gangrenoso. Sobre la honda ligadura del pañuelo, la carne desbordaba como \n' +
                        'una monstruosa morcilla. ',
                },
                {
                    text:
                        'Los dolores fulgurantes se sucedían en continuos relampagueos, y llegaban ahora a \n' +
                        'la ingle. La atroz sequedad de garganta que el aliento parecía caldear más, \n' +
                        'aumentaba a la par. Cuando pretendió incorporarse, un fulminante vómito lo \n' +
                        'mantuvo medio minuto con la frente apoyada en la rueda de palo. \n' +
                        'Pero el hombre no quería morir, y descendiendo hasta la costa subió a su canoa. \n' +
                        'Sentóse en la popa y comenzó a palear hasta el centro del Paraná. Allí la corriente \n' +
                        'del río, que en las inmediaciones del Iguazú corre seis millas, lo llevaría antes de \n' +
                        'cinco horas a Tacurú-Pucú. ',
                },
                {
                    text:
                        'El hombre, con sombría energía, pudo efectivamente llegar hasta el medio del río; \n' +
                        'pero allí sus manos dormidas dejaron caer la pala en la canoa, y tras un nuevo \n' +
                        'vómito —de sangre esta vez—dirigió una mirada al sol que ya trasponía el monte. \n' +
                        'La pierna entera, hasta medio muslo, era ya un bloque deforme y durísimo que \n' +
                        'reventaba la ropa. El hombre cortó la ligadura y abrió el pantalón con su cuchillo: \n' +
                        'el bajo vientre desbordó hinchado, con grandes manchas lívidas y terriblemente \n' +
                        'doloroso. El hombre pensó que no podría jamás llegar él solo a Tacurú-Pucú, y se \n' +
                        'decidió a pedir ayuda a su compadre Alves, aunque hacía mucho tiempo que \n' +
                        'estaban disgustados.',
                },
                {
                    text:
                        'La corriente del río se precipitaba ahora hacia la costa brasileña, y el hombre pudo \n' +
                        'fácilmente atracar. Se arrastró por la picada en cuesta arriba, pero a los veinte \n' +
                        'metros, exhausto, quedó tendido de pecho. \n' +
                        '—¡Alves! —gritó con cuanta fuerza pudo; y prestó oído en vano. \n' +
                        '—¡Compadre Alves! ¡No me niegue este favor! —clamó de nuevo, alzando la \n' +
                        'cabeza del suelo. En el silencio de la selva no se oyó un solo rumor. El hombre \n' +
                        'tuvo aún valor para llegar hasta su canoa, y la corriente, cogiéndola de nuevo, la \n' +
                        'llevó velozmente a la deriva.',
                },
                {
                    text:
                        'El Paraná corre allí en el fondo de una inmensa hoya, cuyas paredes, altas de cien \n' +
                        'metros, encajonan fúnebremente el río. Desde las orillas bordeadas de negros \n' +
                        'bloques de basalto, asciende el bosque, negro también. Adelante, a los costados, \n' +
                        'detrás, la eterna muralla lúgubre, en cuyo fondo el río arremolinado se precipita en \n' +
                        'incesantes borbollones de agua fangosa. El paisaje es agresivo, y reina en él un \n' +
                        'silencio de muerte. Al atardecer, sin embargo, su belleza sombría y calma cobra \n' +
                        'una majestad única.',
                },
                {
                    text:
                        'El sol había caído ya cuando el hombre, semitendido en el fondo de la canoa, tuvo \n' +
                        'un violento escalofrío. Y de pronto, con asombro, enderezó pesadamente la cabeza: \n' +
                        'se sentía mejor. La pierna le dolía apenas, la sed disminuía, y su pecho, libre ya, se \n' +
                        'abría en lenta inspiración. \n' +
                        'El veneno comenzaba a irse, no había duda. Se hallaba casi bien, y aunque no tenía \n' +
                        'fuerzas para mover la mano, contaba con la caída del rocío para reponerse del todo. \n' +
                        'Calculó que antes de tres horas estaría en Tacurú-Pucú. \n' +
                        'El bienestar avanzaba, y con él una somnolencia llena de recuerdos. No sentía ya \n' +
                        'nada ni en la pierna ni en el vientre. ¿Viviría aún su compadre Gaona en Tacurú-Pucú? Acaso viera también a su ex patrón mister Dougald, y al recibidor del \n' +
                        'obraje',
                },
                {
                    text:
                        '¿Llegaría pronto? El cielo, al poniente, se abría ahora en pantalla de oro, y el río se \n' +
                        'había coloreado también. Desde la costa paraguaya, ya entenebrecida, el monte \n' +
                        'dejaba caer sobre el río su frescura crepuscular, en penetrantes efluvios de azahar y \n' +
                        'miel silvestre. Una pareja de guacamayos cruzó muy alto y en silencio hacia el \n' +
                        'Paraguay. \n' +
                        'Allá abajo, sobre el río de oro, la canoa derivaba velozmente, girando a ratos sobre \n' +
                        'sí misma ante el borbollón de un remolino. El hombre que iba en ella se sentía cada \n' +
                        'vez mejor, y pensaba entretanto en el tiempo justo que había pasado sin ver a su ex \n' +
                        'patrón Dougald. ¿Tres años? Tal vez no, no tanto. ¿Dos años y nueve meses? \n' +
                        'Acaso. ¿Ocho meses y medio? Eso sí, seguramente. ',
                },
                {
                    text:
                        'De pronto sintió que estaba helado hasta el pecho. ¿Qué sería? Y la respiración \n' +
                        'también... \n' +
                        'Al recibidor de maderas de mister Dougald, Lorenzo Cubilla, lo había conocido en \n' +
                        'Puerto Esperanza un viernes santo... ¿Viernes? Sí, o jueves . . . \n' +
                        'El hombre estiró lentamente los dedos de la mano. \n' +
                        '—Un jueves... \n' +
                        'Y cesó de respirar.',
                },
            ],
        },
    ];

    getCount(): number {
        return this.stories.length;
    }

    getAll() {
        return of(this.stories);
    }

    get(day: number): Observable<StoryModel> {
        return of(this.stories.filter((story) => story.day === day).pop());
    }
}
