<script lang="ts">
    import { forwardEventsBuilder } from "$lib/internal/forwardEventsBuilder"
    import { get_current_component } from 'svelte/internal';

    const forwardEvents = forwardEventsBuilder(get_current_component());

    let className: string = ""
    export { className as class }
    export let style: string = ""
    export let tag: string = "div"
    export let rounded: boolean = false
</script>

<svelte:element
    this={tag}
    class="outline-2 outline-slate-900 outline {className}"
    style={style}
    class:rounded-sm={rounded}
    class:w-fit={!className.includes(" w-")}
    class:h-fit={!className.includes(" h-")}
    use:forwardEvents
>
    <slot />
</svelte:element>
