<script lang="ts">
    import './menu.css'
    import Box from "../design/Box.svelte";
    import {createEventDispatcher} from 'svelte';
    import {slide} from 'svelte/transition';

    export let options: Option[] = []
    export let defaultOption: string = ""
    export let title: string = ""

    const dispatch = createEventDispatcher();
    let showDropdown = false

    interface Option {
        label: string;
        value: any;
    }

    function closeDropdown() {
        showDropdown = false
    }

    function openDropdown() {
        showDropdown = true
    }

    function selectOption(value: string) {
        closeDropdown()
        dispatch("select", { value });
    }
</script>

<div class="relative">
    <Box
        tag="button"
        class="button z-30 bg-slate-50"
        on:click={openDropdown}
    >
        {defaultOption}
    </Box>

    {#if showDropdown}
        <button
            on:click={closeDropdown}
            on:touchstart={closeDropdown}
            class="fixed z-40 w-full h-full left-0 top-0 cursor-default backdrop-blur-[1px] backdrop-brightness-90"
        ></button>
        <div in:slide={{duration: 60}}>
            <Box
                class="absolute max-h-[90vh] mt-12 z-50 overflow-auto py-2 button-shadow text-center bg-slate-50 bottom-0 right-0 flex flex-col-reverse min-[1145px]:flex-col min-[1145px]:right-auto min-[1145px]:-top-12"
            >
                {#each options as option}
                    <button
                            on:click={() => selectOption(option.value)}
                            class="w-full whitespace-nowrap px-12 py-2.5 hover:bg-slate-900 hover:text-slate-50 min-[1145px]px-7"
                    >
                        {option.label}
                    </button>
                {/each}
            </Box>
        </div>
    {/if}
</div>
