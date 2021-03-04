english = false
switchLang()

function switchLang() {
  if (english) {
    document.getElementById('lang').innerHTML = 'EN'
    document.querySelector('#josef h3').innerHTML = 'Josef Tumari'
    document.querySelector('#daria h3').innerHTML = 'Daria Pavlikova'

    document.querySelector('#amina h3').innerHTML = 'Amina Khaitova'
    document.querySelector('#valeriya h3').innerHTML = 'Valeria Shkolyarenko'
    document.querySelector('#jong h3').innerHTML = 'Jong In'
    document.querySelector('#christine h3').innerHTML = 'Christine Borzova'
    document.querySelector('#margarita h3').innerHTML = 'Margarita Domahina'
    document.querySelector('#mukhtor h3').innerHTML = 'Mukhtor Asrorov'
    document.querySelector('#saida h3').innerHTML = 'Saida Turabekova'
    
    document.querySelector('#aisha h3').innerHTML = 'Aisha Imamturaeva'
    document.querySelector('#elisaveta h3').innerHTML = 'Elisaveta Malinina'
    document.querySelector('#malika h3').innerHTML = 'Malika Zayniddinova'
    document.querySelector('#mirzaeva h3').innerHTML = 'Malika Mirzaeva'
    document.querySelector('#munis h3').innerHTML = 'Munis Juraeva'
    document.querySelector('#olima h3').innerHTML = 'Olima Khayitova'
    document.querySelector('#sarvinoz h3').innerHTML = 'Sarvinoz Kasimova'
    document.querySelector('#safina h3').innerHTML = 'Safina Sharipova'
    document.querySelector('#iroda h3').innerHTML = 'Iroda Nigmatillaeva'
    document.querySelector('#diyora h3').innerHTML = 'Diyora Pirnazarova'

    document.querySelector('#introP').innerHTML = 'is a multidisciplinary experiential performance that will take visitors on a journey of exploring sensations, feelings and emotions. Visual arts, dance, color, sound, smell, and taste – everything will be joint together for the visitor to experience.'
    document.querySelector('#button').innerHTML = 'Buy a ticket'
    document.querySelector('#conditions').innerHTML = 'Conditions'
    document.querySelector('#journey').innerHTML = 'Your journey'

    document.querySelector('#zone1').innerHTML = 'When you enter the first door, you will taste the music, absorb color, light. And you can become a poet for a while.'
    document.querySelector('#zone2').innerHTML = 'As you travel further, you will witness an improvised dance where light replaces music. And if you want, you can merge with the dance by drawing.'
    document.querySelector('#zone3').innerHTML = 'Soft, hard, smooth, rough, warm to the soul and pleasant to the feet – how does it sound?'
    document.querySelector('#zone4').innerHTML = 'Let yourself go, give free rein to your feelings. Merge with colors, creating your own little miracle. Or watch from the side. And, by the way, who said you cannot be an artist?'

    document.querySelector('#artists').innerHTML = 'Artists'
    document.querySelector('#music').innerHTML = 'Music'
    document.querySelector('#photo').innerHTML = 'Photo'
    document.querySelector('#dance').innerHTML = 'Dance'
    document.querySelector('#art').innerHTML = 'Fine Art'
    document.querySelector('#creativeProducers').innerHTML = 'Creative producers'

    document.querySelector('#partners').innerHTML = 'Partners'
    document.querySelector('#infoPartners').innerHTML = 'InforPartners'
    document.querySelector('#organizers').innerHTML = 'Organizers'
    document.querySelector('#location').innerHTML = 'Location'

    document.querySelector('#sellOne').innerHTML = 'Very soon you will be able to stay alone with creativity. All you have to do is '
    document.querySelector('#sellBtn').innerHTML = 'buy a ticket'
    document.querySelector('#sellTwo').innerHTML = ', but first, we ask you to choose a time and day convenient for you, and make sure that you are not allergic to food colors and artificial flavorings.'

    document.querySelector('#question').innerHTML = 'Are you ready for immersion?'
    document.querySelector('#date').innerHTML = '18-21 March'

    document.querySelector('#ticketsHeading').innerHTML = 'THE SOONER YOU BUY A TICKET, THE MORE PROFITABLE IT IS'
    document.querySelector('#ticketOnePrice').innerHTML = '70 000 sum'
    document.querySelector('#ticketOne').innerHTML = 'The price is valid until March 8 inclusive'

    document.querySelector('#ticketTwoPrice').innerHTML = '100 000 sum'
    document.querySelector('#ticketTwo').innerHTML = 'The price is valid until March 15 inclusive'

    document.querySelector('#ticketThreePrice').innerHTML = '130 000 sum'
    document.querySelector('#ticketThree').innerHTML = 'The price is valid until March 17 inclusive'

    document.querySelector('#lastOne').innerHTML = 'We ask you not to be late for your individual art immersion session.'
    document.querySelector('#lastTwo').innerHTML = 'And, if necessary, please wait a little for your turn.'
    document.querySelector('#lastThree').innerHTML = 'See you soon.'

    document.querySelector('#azizaName').innerHTML = 'Aziza'
    document.querySelector('#aziza').innerHTML = 'Pulatova'
    document.querySelector('#anastasiaName').innerHTML = 'Anastasia'
    document.querySelector('#anastasia').innerHTML = 'Galimova'
    document.querySelector('#mariyaName').innerHTML = 'Mariya'
    document.querySelector('#mariya').innerHTML = 'Khudayberdieva'
    document.querySelector('#niginaName').innerHTML = 'Nigina'
    document.querySelector('#nigina').innerHTML = 'Khalmukhamedova'
    
    english = false
  } else {
    document.getElementById('lang').innerHTML = 'RU'
    document.querySelector('#josef h3').innerHTML = 'Йозеф Тумари'
    document.querySelector('#daria h3').innerHTML = 'Дарья Павликова'

    document.querySelector('#amina h3').innerHTML = 'Амина Хаитова'
    document.querySelector('#valeriya h3').innerHTML = 'Валерия Школяренко'
    document.querySelector('#jong h3').innerHTML = 'Джонг Ин'
    document.querySelector('#christine h3').innerHTML = 'Кристина Борзова'
    document.querySelector('#margarita h3').innerHTML = 'Маргарита Домахина'
    document.querySelector('#mukhtor h3').innerHTML = 'Мухтор Асроров'
    document.querySelector('#saida h3').innerHTML = 'Саида Турабекова'

    document.querySelector('#aisha h3').innerHTML = 'Аиша Имамтураева'
    document.querySelector('#elisaveta h3').innerHTML = 'Елизавета  Малинина'
    document.querySelector('#malika h3').innerHTML = 'Малика Зайниддинова'
    document.querySelector('#mirzaeva h3').innerHTML = 'Малика Мирзаева'
    document.querySelector('#munis h3').innerHTML = 'Мунис Джураева'
    document.querySelector('#olima h3').innerHTML = 'Олима Хаитова'
    document.querySelector('#sarvinoz h3').innerHTML = 'Сарвиноз Касымова'
    document.querySelector('#safina h3').innerHTML = 'Сафина Шарипова'
    document.querySelector('#iroda h3').innerHTML = 'Ирода Нигматиллаева'
    document.querySelector('#diyora h3').innerHTML = 'Диёра Пирназарова'

    document.querySelector('#introP').innerHTML = ' – это мультидисциплинарный экспериментальный перформанс, который отправит тебя в путешествие по исследованию ощущений, чувств и эмоций. Изобразительное искусство, танец, цвет, звук и вкус – все сольется вместе для индивидуального арт-погружения.'
    document.querySelector('#button').innerHTML = 'Купить билеты'
    document.querySelector('#conditions').innerHTML = 'Условия'
    document.querySelector('#journey').innerHTML = 'Вас ждёт'

    document.querySelector('#zone1').innerHTML = 'Войдя в первую дверь, ты познаешь музыку на вкус. Впитаешь в себя цвет, свет и сможешь ненадолго стать поэтом.'
    document.querySelector('#zone2').innerHTML = 'Путешествуя дальше, ты станешь свидетелем импровизационного танца, где свет заменит музыку. А если захочешь – можешь слиться с танцем рисунком. '
    document.querySelector('#zone3').innerHTML = 'Мягкое, твердое, гладкое, шершавое, теплое душе и приятное ногам – а как оно звучит?'
    document.querySelector('#zone4').innerHTML = 'Отпусти себя, дай волю своим чувствам. Слейся с красками, творя свое маленькое чудо. Или понаблюдай со стороны. И, да, кто сказал, что ты не художник?'

    document.querySelector('#artists').innerHTML = 'Артисты'
    document.querySelector('#music').innerHTML = 'Музыка'
    document.querySelector('#photo').innerHTML = 'Фотография'
    document.querySelector('#dance').innerHTML = 'Танец'
    document.querySelector('#art').innerHTML = 'Изобразительное искусство'
    document.querySelector('#creativeProducers').innerHTML = 'Креативные продюсеры'

    document.querySelector('#partners').innerHTML = 'Партнеры'
    document.querySelector('#infoPartners').innerHTML = 'Инфопартнеры'
    document.querySelector('#organizers').innerHTML = 'Организаторы'
    document.querySelector('#location').innerHTML = 'Локация'

    document.querySelector('#sellOne').innerHTML = 'Совсем скоро ты сможешь побыть с творчеством наедине. Для этого остается лишь успеть '
    document.querySelector('#sellBtn').innerHTML = 'купить билет'
    document.querySelector('#sellTwo').innerHTML = ', но прежде просим тебя выбрать удобное для тебя время и день, и убедиться, что у тебя нет аллергии на пищевые красители и искусственные вкусовые добавки.'

    document.querySelector('#question').innerHTML = 'Ну что, готов к погружению?'
    document.querySelector('#date').innerHTML = '18-21 Марта'

    document.querySelector('#ticketsHeading').innerHTML = 'ЧЕМ РАНЬШЕ КУПИШЬ БИЛЕТ, ТЕМ ВЫГОДНЕЕ'
    document.querySelector('#ticketOnePrice').innerHTML = '70 000 сум'
    document.querySelector('#ticketOne').innerHTML = 'Цена действительна до 8 марта включительно'

    document.querySelector('#ticketTwoPrice').innerHTML = '100 000 сум'
    document.querySelector('#ticketTwo').innerHTML = 'Цена действительна до 15 марта включительно'

    document.querySelector('#ticketThreePrice').innerHTML = '130 000 сум'
    document.querySelector('#ticketThree').innerHTML = 'Цена действительна до 17 марта включительно'

    document.querySelector('#lastOne').innerHTML = 'Просим тебя не опаздывать на свой индивидуальный сеанс арт-погружения. '
    document.querySelector('#lastTwo').innerHTML = 'И, если будет нужно, немножечко подождать своей очереди.'
    document.querySelector('#lastThree').innerHTML = 'Скоро встретимся.'

    document.querySelector('#azizaName').innerHTML = 'Азиза'
    document.querySelector('#aziza').innerHTML = 'Пулатова'
    document.querySelector('#anastasiaName').innerHTML = 'Анастасия'
    document.querySelector('#anastasia').innerHTML = 'Галимова'
    document.querySelector('#mariyaName').innerHTML = 'Мария'
    document.querySelector('#mariya').innerHTML = 'Худайбердиева'
    document.querySelector('#niginaName').innerHTML = 'Нигина'
    document.querySelector('#nigina').innerHTML = 'Халмухамедова'

    english = true
  }
}

const language = document.querySelector('#lang')

language.addEventListener('click', switchLang)