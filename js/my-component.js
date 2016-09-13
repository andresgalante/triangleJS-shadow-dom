(function() {
'use strict';

customElements.define('my-component', class extends HTMLElement {

  constructor() {
    super(); // always call super() first in the ctor.

    // Create shadow DOM for the component.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: orange;
          padding: 4em;
        }
        :host(.blue) {
          background: blue;
        }
        :host([dissabled]) {
          background: grey;
        }
        :host-context(.darktheme) {
          background: black;
        }
        p, ::slotted(p){
          background: var(--bg-color, red);
          @apply --pink-theme;
        }
      </style>
      <slot name="slot">
        <p>Hello! I am a placeholder!</p>
      </slot>

    `;
  }

});

})();
