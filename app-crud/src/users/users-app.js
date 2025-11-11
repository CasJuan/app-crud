import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usesStore from "./store/uses-store";

export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usesStore.loadNextPAge();

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
}