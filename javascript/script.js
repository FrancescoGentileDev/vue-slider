
const data = [
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
        slides: data,
        currentIndex: 0,
        idTimeout: undefined,
    },
    methods: {

        active: function (index) {
           
            if (index == this.currentIndex)
                return "active"
            else
                return ""
        },


        nextImg: function () {
            if(this.currentIndex<this.slides.length - 1 )
                this.currentIndex++
            else {
                this.currentIndex = 0
            }
           
        },

        previousImg: function () {            
          
            if(this.currentIndex>0)
                this.currentIndex--
            else {
                this.currentIndex = this.slides.length - 1 
            }
        },



        clickChange: function (index) {
            this.currentIndex = index
        },

        stopAutoplay: function () {
            clearTimeout(this.idTimeout)
        },
        
        resumeAutoPlay: function () {
            this.idTimeout = setInterval(() => {
                this.nextImg()
            }, 3000);
        }



    },
    created() {
       this.resumeAutoPlay()
    },
}) 




