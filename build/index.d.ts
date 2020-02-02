import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export declare const LevelContext: React.Context<number>;
declare type HeadingLevelProps = {
    value?: number;
    children: ReactNode;
};
export declare function Level(props: HeadingLevelProps): JSX.Element;
declare type HeadingProps = {
    offset?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export declare function H(props: HeadingProps): React.DOMElement<{
    ref?: React.LegacyRef<HTMLHeadingElement>;
    key?: string | number;
    defaultChecked?: boolean;
    defaultValue?: string | number | string[];
    suppressContentEditableWarning?: boolean;
    suppressHydrationWarning?: boolean;
    accessKey?: string;
    className?: string;
    contentEditable?: boolean | "inherit" | "false" | "true";
    contextMenu?: string;
    dir?: string;
    draggable?: boolean | "false" | "true";
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean | "false" | "true";
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: "yes" | "no";
    radioGroup?: string;
    role?: string;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: "on" | "off";
    inputMode?: "search" | "none" | "text" | "decimal" | "numeric" | "tel" | "url" | "email";
    is?: string;
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | "false" | "true";
    'aria-autocomplete'?: "none" | "both" | "inline" | "list";
    'aria-busy'?: boolean | "false" | "true";
    'aria-checked'?: boolean | "mixed" | "false" | "true";
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date";
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | "false" | "true";
    'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup";
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | "false" | "true";
    'aria-flowto'?: string;
    'aria-grabbed'?: boolean | "false" | "true";
    'aria-haspopup'?: boolean | "dialog" | "menu" | "listbox" | "grid" | "false" | "true" | "tree";
    'aria-hidden'?: boolean | "false" | "true";
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling";
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: "off" | "assertive" | "polite";
    'aria-modal'?: boolean | "false" | "true";
    'aria-multiline'?: boolean | "false" | "true";
    'aria-multiselectable'?: boolean | "false" | "true";
    'aria-orientation'?: "horizontal" | "vertical";
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | "mixed" | "false" | "true";
    'aria-readonly'?: boolean | "false" | "true";
    'aria-relevant'?: "all" | "text" | "additions" | "additions text" | "removals";
    'aria-required'?: boolean | "false" | "true";
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | "false" | "true";
    'aria-setsize'?: number;
    'aria-sort'?: "none" | "ascending" | "descending" | "other";
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    onCopy?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onCopyCapture?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onCut?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onCutCapture?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onPaste?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onPasteCapture?: (event: React.ClipboardEvent<HTMLHeadingElement>) => void;
    onCompositionEnd?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onCompositionEndCapture?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onCompositionStart?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onCompositionStartCapture?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onCompositionUpdate?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onCompositionUpdateCapture?: (event: React.CompositionEvent<HTMLHeadingElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLHeadingElement>) => void;
    onFocusCapture?: (event: React.FocusEvent<HTMLHeadingElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLHeadingElement>) => void;
    onBlurCapture?: (event: React.FocusEvent<HTMLHeadingElement>) => void;
    onChange?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onChangeCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onBeforeInput?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onBeforeInputCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onInput?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onInputCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onReset?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onResetCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onSubmitCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onInvalid?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onInvalidCapture?: (event: React.FormEvent<HTMLHeadingElement>) => void;
    onLoad?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onError?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onErrorCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyDownCapture?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyPressCapture?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyUpCapture?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onAbort?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onAbortCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onCanPlay?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onCanPlayCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onCanPlayThrough?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onCanPlayThroughCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onDurationChange?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onDurationChangeCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEmptied?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEmptiedCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEncrypted?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEncryptedCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEnded?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onEndedCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadedData?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadedDataCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadedMetadata?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadedMetadataCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadStart?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onLoadStartCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPause?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPauseCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPlay?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPlayCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPlaying?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onPlayingCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onProgress?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onProgressCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onRateChange?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onRateChangeCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSeeked?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSeekedCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSeeking?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSeekingCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onStalled?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onStalledCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSuspend?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSuspendCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onTimeUpdate?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onTimeUpdateCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onVolumeChange?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onVolumeChangeCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onWaiting?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onWaitingCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onAuxClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onAuxClickCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onClickCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onContextMenu?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onContextMenuCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onDoubleClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onDoubleClickCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onDrag?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragEnd?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragEndCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragEnter?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragEnterCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragExit?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragExitCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragLeave?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragLeaveCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragOver?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragOverCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragStart?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDragStartCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onDropCapture?: (event: React.DragEvent<HTMLHeadingElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseDownCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseMove?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseMoveCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseOut?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseOutCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseOverCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseUp?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onMouseUpCapture?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
    onSelect?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onSelectCapture?: (event: React.SyntheticEvent<HTMLHeadingElement, Event>) => void;
    onTouchCancel?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchCancelCapture?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchEnd?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchEndCapture?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchMove?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchMoveCapture?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchStart?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onTouchStartCapture?: (event: React.TouchEvent<HTMLHeadingElement>) => void;
    onPointerDown?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerDownCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerMove?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerMoveCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerUp?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerUpCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerCancel?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerCancelCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerEnter?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerEnterCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerLeave?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerLeaveCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerOver?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerOverCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerOut?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onPointerOutCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onGotPointerCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onGotPointerCaptureCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onLostPointerCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onLostPointerCaptureCapture?: (event: React.PointerEvent<HTMLHeadingElement>) => void;
    onScroll?: (event: React.UIEvent<HTMLHeadingElement>) => void;
    onScrollCapture?: (event: React.UIEvent<HTMLHeadingElement>) => void;
    onWheel?: (event: React.WheelEvent<HTMLHeadingElement>) => void;
    onWheelCapture?: (event: React.WheelEvent<HTMLHeadingElement>) => void;
    onAnimationStart?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onAnimationStartCapture?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onAnimationEnd?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onAnimationEndCapture?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onAnimationIteration?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onAnimationIterationCapture?: (event: React.AnimationEvent<HTMLHeadingElement>) => void;
    onTransitionEnd?: (event: React.TransitionEvent<HTMLHeadingElement>) => void;
    onTransitionEndCapture?: (event: React.TransitionEvent<HTMLHeadingElement>) => void;
}, HTMLHeadingElement>;
export declare function useLevel(): number;
export {};
