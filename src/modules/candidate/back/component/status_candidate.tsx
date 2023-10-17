'use client'

import { Switch } from "@mantine/core";
import { useState } from "react";


/**
 * Fungsi untuk menampilkan Switch untuk set active candidate.
 * @returns {component} switch candidate.
 */

export default function SwitchStatusCandidate({ status, onCallBack }: { status: boolean, onCallBack: (val: any) => void }) {
    const [checked, setChecked] = useState(status)


    return (
        <>
            <Switch checked={checked} size="md" onLabel="ON" offLabel="OFF" onChange={(val) => {
                // onConfirmation({ value: val.currentTarget.checked })
                onCallBack(val.currentTarget.checked)
            }} />
        </>
    )
}