import { LitElement, html, css } from 'lit-element';
/**
 * Codeblocks are great for examples
 * 
 * ```
 * <my-custom-element>Highlight JS will autodetect the language</my-custom-element>
 * ```
 * 
 * ```typescript
 * // Or you can specify the language explicitly
 * const instance = new MyClass();
 * ```
 */
class UploadButton extends LitElement {
    static get properties() {
        return {
            text: {type: String}
        };
    }

    static get styles() {
        return [
            css`
                :host{
                  font-family: sans-serif;
                  color: var(--app-primary-color, #2196f3);
                }
                input{
                    display: none;
                }
                a *{
                    vertical-align: middle;
                }
                a{
                    font-size: 13px;
                    height: 32px;
                    padding: 7px 4px;
                    line-height: 16px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid transparent;
                    display: inline-block;
                    cursor: pointer;
                    color: var(--app-primary-color, #2196f3);
                }
                svg{
                    width: 16px;
                    height: 16px;
                    fill: #757575;
                }
                a:hover{
                    border: 1px solid var(--app-primary-color, #2196f3);
                    color: var(--app-primary-color, #2196f3);
                }
                a:hover svg{
                    fill: var(--app-primary-color, #2196f3);
                }
            `
        ];
    }
    constructor() {
        super();
        var me = this;
        me.text = 'UPLOAD FILES';
    }
    render() {
        var me = this;
        return html`
            <input @change="${me._onInputChange}" type="file" id="fileInput" multiple/>
            <a @click="${me._onButtonClick}">
                <svg height="24" viewBox="0 0 32 32" width="24"><path d="M15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2zM7 10l8-8 8 8h-5v10h-6v-10z"></path></svg>
                <span>${me.text}</span>
            </a>
        `;
    }
    get fileInput() {
        return this.shadowRoot.getElementById('fileInput');
    }

    _onButtonClick() {
        this.fileInput.click();
    }

    _onInputChange() {
        var me = this;
        if (me.fileInput.files.length) {
            let event = new CustomEvent('picked-files', {
                detail: {
                    fileList: me.fileInput.files
                }
            });
            me.dispatchEvent(event);
            alert('Some files were selected and are ready to be ouploded!');
        }
    }
}

window.customElements.define('pf-upload-button', UploadButton);
