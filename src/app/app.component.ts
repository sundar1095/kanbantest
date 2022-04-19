import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { extend } from '@syncfusion/ej2-base';
import {KanbanComponent,CardSettingsModel} from '@syncfusion/ej2-angular-kanban';
import { Query } from '@syncfusion/ej2-data';
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
  searchClick(e: KeyboardEvent): void {
    let searchValue: string = (<HTMLInputElement>e.target).value;
    let searchQuery: Query = new Query();
    if (searchValue !== '') {
        searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
    }
    (this.kanbanObj as any).query = searchQuery;
}
reset(): void {
    this.textBoxObj.value = '';
    (this.kanbanObj as any).query = new Query();
}
}
