import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { extend } from '@syncfusion/ej2-base';
import {KanbanComponent,CardSettingsModel} from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('search') textBoxObj: TextBoxComponent;
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
  public kanbanData: Object[] = extend([], kanbanData, undefined, true) as Object[];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
    tagsField: 'Tags',
    grabberField: 'Color',
    footerCssField: 'ClassName',
  };
  
}
