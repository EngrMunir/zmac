import React, { useMemo } from 'react'

const useJoditEditorConfig = () => {
    const options = ['font', 'fontsize', 'bold', 'italic', 'underline', 'link', 'ul', 'ol', 'align', 'image'];
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Start typings...',
            // defaultActionOnPaste: InsertMode.INSERT_AS_HTML,
            defaultLineHeight: 1.3,
            buttons: options,
            buttonsMD: options,
            buttonsSM: options,
            buttonsXS: options,
            statusbar: false,
            sizeLG: 900,
            sizeMD: 700,
            sizeSM: 400,
            toolbarAdaptive: false,
        }),
        [],
    );
    return config
}

export default useJoditEditorConfig