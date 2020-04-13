import React, { useState } from 'react';
import { Page } from 'framer';

import { BootlegBoy } from './channels/BootlegBoy';

export default function RadioTuner() {
    const [state, setState] = useState();
 
    return (
        <>
            <Page 
                direction="vertical"
                directionLock={true}
                momentum
            >
                <BootlegBoy />
                <BootlegBoy />
            </Page>
        </>
    )
}