import { writable } from 'svelte/store';

export const inputValue = writable('');
export const filteredWords = writable([]);
export const counter = writable('12972');