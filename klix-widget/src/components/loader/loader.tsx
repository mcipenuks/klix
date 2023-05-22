import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'klix-loader',
    styleUrl: 'loader.scss',
})

export class Loader {
    @Prop() isVisible: boolean = false;

    render() {
        return (
            <div class={`loader-container ${this.isVisible ? 'visible' : ''}`}>
                <div class="loader"></div>
            </div>
        );
    }
}
