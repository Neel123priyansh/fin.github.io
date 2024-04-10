import { Suspense } from 'react'
import { Outlet } from 'react-router'

function BaseComponent() {
    return (
        <div style={{width:'100%'}}>
            <Suspense fallback={<span>Loading..</span>}>
                <div>
                    <Outlet />
                </div>
            </Suspense>
        </div>
    )
}

export default BaseComponent