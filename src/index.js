import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-extended-text-entry'

export default class CorespringTextEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<extended-text-entry id="' + this.getAttribute('pie-id') + '"></extended-text-entry>';
  }
}


