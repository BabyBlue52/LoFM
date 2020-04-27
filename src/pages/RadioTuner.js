import React, { useState } from 'react';
import { Page } from 'framer';

import { BootlegBoy } from './channels/BootlegBoy';

export default function RadioTuner() {
    const [state, setState] = useState();
 
    return (
        <>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true} 
            >
                <BootlegBoy />
                <Page > <h1>The Chilled Cow</h1></Page>
                <BootlegBoy />
            </Page>
        </>
    )
}