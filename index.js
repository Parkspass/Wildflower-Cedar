/*jshint esversion: 6 */

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'landing', // loading, landing, research
        hambugerMenuIcon: 'icons/hamburger_menuDark.svg',
        wildflowerIcon: 'icons/flowerDark.svg',
        treesIcon: 'icons/treeDark.svg',
        drawer: true,
        common_selected: true,
        latin_selected: false
        

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
        commonSelected: function() {
            console.log('common clicked');
            this.common_selected = true;
            this.latin_selected = false;
        },
        latinSelected: function() {
            console.log('latin clicked');
            this.common_selected = false;
            this.latin_selected = true;
        }
        
        
    },
    created: function(){

    },
    
});