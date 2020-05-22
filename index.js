/*jshint esversion: 6 */

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        page: 'research', // loading, home, searchWildflowers, serachTrees, Instructions, Glossary, Resources, Info
        hambugerMenuIcon: 'icons/hamburger_menuDark.svg',
        wildflowerIcon: 'icons/flowerDark.svg',
        treesIcon: 'icons/treeDark.svg',
        drawer: false,
        common_selected: true,
        latin_selected: false
        

    },
    methods: {
        setAppBarIcon: function(tab){ 
            this.resetAppBarTabs();
            console.log('tab: ', tab);
            switch(tab){
                // color change will never be seen so we dont need to change it.
                //case 'hamburger': this.hambugerMenuIcon = 'icons/hamburger_menuLight.svg'; break;
                case 'searchWildflowers': 
                    this.wildflowerIcon = 'icons/appbar_flower.svg';
                    this.page = 'searchWildflowers';
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
        sideDrawerPageChange: function(page) {
            //console.log('page: ', page);
            this.resetAppBarTabs();
            if(page == 'searchWildflowers') {
                this.setAppBarIcon('searchWildflowers');
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