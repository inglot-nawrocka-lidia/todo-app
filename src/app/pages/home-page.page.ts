import { 
    Component, 
    ViewEncapsulation, 
    ChangeDetectionStrategy } from '@angular/core';

@Component({ 
    selector: 'app-home-page-page', 
    templateUrl: './home-page.page.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })

export class HomePagePage {
    onChangeClicked(): void {
        let buttonOfChange = document.getElementById('buttonOfChange');
        if (buttonOfChange != null) {
            buttonOfChange.style.display = 'block';
        }
        let change = document.getElementById('changeToForm');
        if (change != null) {
            change.style.display = 'none';
        }
    }
}

