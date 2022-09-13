
const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];




const app = new Vue({
    el: "#app",
    data: {
        prova: "ciao",
        thumb: "thumb",
        currentIndex: 0,
        get currentImage() { return slides[this.currentIndex].image },
        get currentTitle() {return slides[this.currentIndex].title},
        get currentText() { return slides[this.currentIndex].text },
    },
    methods: {
        nextImg: function() {
            if(this.currentIndex<4)
                this.currentIndex++
            else {
                this.currentIndex = 0 
            }
            console.log(this.currentIndex)
        },
        previousImg: function () {
            console.log(this.currentIndex)
            if(this.currentIndex>0)
                this.currentIndex--
            else {
                this.currentIndex = 4
            }
        },

        clickChange: function (event) {
            let changeIndex = 0
           changeIndex = slides.findIndex((element) => element.title === event.target.alt)
            console.log(changeIndex)
            this.currentIndex = changeIndex
        }
    },
}) 




