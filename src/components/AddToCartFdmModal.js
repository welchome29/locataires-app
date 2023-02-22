import { Popover, Pane, Button } from 'evergreen-ui'
import React from 'react'

export default function AddToCartFdmModal() {
  return (
    <Popover
        content={({ close }) => (
            <Pane
                width={320}
                height={320}
                paddingX={40}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Button onClick={close}>Close</Button>
            </Pane>
        )}
    />
  )
}
