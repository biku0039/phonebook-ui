import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonsComponent } from './persons.component';
import { CreateOrEditPersonModalComponent } from './create-or-edit-person-modal.component';
import { ViewPersonModalComponent } from './view-person-modal.component';

@NgModule({
    declarations: [PersonsComponent, CreateOrEditPersonModalComponent, ViewPersonModalComponent],
    imports: [AppSharedModule, PersonRoutingModule, AdminSharedModule],
})
export class PersonModule {}
