interface Input {
    /**
     * Enable or disable this component's focus, while still maintaining its position in the list of focusable components.
     */
    isActive?: boolean;
    /**
     * Auto focus this component, if there's no active (focused) component right now.
     */
    autoFocus?: boolean;
}
interface Output {
    /**
     * Determines whether this component is focused or not.
     */
    isFocused: boolean;
}
/**
 * Component that uses `useFocus` hook becomes "focusable" to Ink,
 * so when user presses <kbd>Tab</kbd>, Ink will switch focus to this component.
 * If there are multiple components that execute `useFocus` hook, focus will be
 * given to them in the order that these components are rendered in.
 * This hook returns an object with `isFocused` boolean property, which
 * determines if this component is focused or not.
 */
declare const useFocus: ({ isActive, autoFocus }?: Input) => Output;
export default useFocus;
