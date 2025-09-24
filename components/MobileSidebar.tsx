//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { NavItems } from "components"
import { useRef } from "react"
import { Link } from "react-router"

const MobileSidebar = () => {
    let sidebar :SidebarComponent
    const sidebarRef = useRef<SidebarComponent>(null);
  return (
    <div className="mobile-sidebar wrapper">
        <header>
            <Link to='/'>
                <img 
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    className="size-[30px]" 
                />
                <h1>Tourvisto</h1>
            </Link>

            <button onClick={() => sidebarRef.current?.toggle()}>
                <img src="/assets/icons/menu.svg"
                     alt="menu"
                     className="size-7" />
            </button>
        </header>
        <SidebarComponent 
            width={270}
            ref={(Sidebar)=>Sidebar = sidebar}
            created={()=> {if (sidebarRef.current) {
      sidebarRef.current.hide();
    }}}
            closeOnDocumentClick={true}
            showBackdrop={true}
            type="over"
        >
            <NavItems/>
        </SidebarComponent>
    </div>
  )
}

export default MobileSidebar
