/*jshint esversion: 6 */

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'research', // loading, landing, research
        hambugerMenuIcon: 'icons/hamburger_menuDark.svg',
        wildflowerIcon: 'icons/flowerDark.svg',
        treesIcon: 'icons/treeDark.svg',
        drawer: true
    },
    methods: {
        setAppBarIcon: function(tab){ 
            this.resetAppBarTabs();
            console.log('tab: ', tab);
            switch(tab){
                case 'hamburger': this.hambugerMenuIcon = 'icons/hamburger_menuLight.svg'; break;
                case 'flower': this.wildflowerIcon = 'icons/appbar_flower.svg'; break;
                case 'tree': this.treesIcon = 'icons/treeLight.svg'; break;
            }
        },
        resetAppBarTabs: function() {
            this.hambugerMenuIcon = 'icons/hamburger_menuDark.svg';
            this.wildflowerIcon = 'icons/flowerDark.svg';
            this.treesIcon = 'icons/treeDark.svg';
        },
        
    },
    created: function(){

    },
    
});