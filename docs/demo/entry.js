
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;

  import comp1 from 'pie-player';
  //customElements v1 
  customElements.define('pie-player', comp1);
  

  import comp2 from 'pie-control-panel';
  //customElements v1 
  customElements.define('pie-control-panel', comp2);
  

  import comp3 from 'corespring-extended-text-entry-ng15';
  //customElements v1 
  customElements.define('corespring-extended-text-entry-ng15', comp3);
  
    