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

    english = false
  } else {
    document.getElementById('lang').innerHTML = 'RU'
    document.querySelector('#josef h3').innerHTML = 'Йозеф Тумари'
    document.querySelector('#daria h3').innerHTML = 'Дарья Павликова'

    document.querySelector('#amina h3').innerHTML = 'Амина Хаитова'
    document.querySelector('#valeriya h3').innerHTML = 'Валерия Школяренко'
    document.querySelector('#jong h3').innerHTML = 'Джон Ин'
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

    english = true
  }
}

const language = document.querySelector('#lang')

language.addEventListener('click', switchLang)