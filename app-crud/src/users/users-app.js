import usesStore from "./store/uses-store";

export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usesStore.loadNextPAge()
}