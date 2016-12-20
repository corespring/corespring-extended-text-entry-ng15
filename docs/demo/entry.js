
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;
import PiePlayer from 'pie-player';
customElements.define('pie-player', PiePlayer);
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
import CorespringExtendedTextEntryNg15 from 'corespring-extended-text-entry-ng15';
customElements.define('corespring-extended-text-entry-ng15', CorespringExtendedTextEntryNg15);
    