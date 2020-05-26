/*jshint esversion: 6 */

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'home', // loading, home, research, serachTrees, Instructions, Glossary, Resources, Info
        hambugerMenuIcon: 'icons/hamburger_menuDark.svg',
        wildflowerIcon: 'icons/flowerDark.svg',
        treesIcon: 'icons/treeDark.svg',
        drawer: false,
        common_selected: true,
        latin_selected: false,
        abc_selected: true,
        class_selected: false,
        simple_selected: false,
        daisy_selected: false,
        irregular_selected: false,
        basal_selected: false,
        opposite_selected: false,
        whorled_selected: false,
        alternate_selected: false,
        blue_selected: false,
        orange_selected: false,
        pink_selected: false,
        yellow_selected: false,
        red_selected: false,
        purple_selected: false,
        white_selected: false,
        all_selected: false,

        petalNumber: "All",
    },
    methods: {
        setAppBarIcon: function(tab){ 
            this.resetAppBarTabs();
            console.log('tab: ', tab);
            switch(tab){
                // color change will never be seen so we dont need to change it.
                //case 'hamburger': this.hambugerMenuIcon = 'icons/hamburger_menuLight.svg'; break;
                case 'research': 
                    this.wildflowerIcon = 'icons/appbar_flower.svg';
                    this.page = 'research';
                    break;
                case 'serachTrees': 
                    this.treesIcon = 'icons/treeLight.svg';
                    this.page = 'serachTrees';
                    break;
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
        },
        abcSelected: function() {
            console.log('abc clicked');
            this.abc_selected = true;
            this.class_selected = false;
        },
        classSelected: function() {
            console.log('class clicked');
            this.abc_selected = false;
            this.class_selected = true;
        },
        simpleSelected: function(){
            this.simple_selected = true;
            this.daisy_selected = false;
            this.irregular_selected = false;
        },
        daisySelected: function(){
            this.simple_selected = false;
            this.daisy_selected = true;
            this.irregular_selected = false;
        },
        irregularSelected: function(){
            this.simple_selected = false;
            this.daisy_selected = false;
            this.irregular_selected = true;
        },
        sideDrawerPageChange: function(page) {
            //console.log('page: ', page);
            this.resetAppBarTabs();
            if(page == 'research') {
                this.setAppBarIcon('research');
            }
            if(page == 'serachTrees') {
                this.setAppBarIcon('serachTrees');
            }
            this.drawer = false;
            this.page = page;
        }
        
        
    },
    created: function(){

    },
    
});