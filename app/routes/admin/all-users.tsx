 import { Header } from "../../../components";
import { ColumnsDirective, ColumnDirective, GridComponent,Inject,
    Sort,
    Filter,
    Page,
    Toolbar, } from "@syncfusion/ej2-react-grids";
import { cn, formatDate } from "~/lib/utils";
import { getAllUsers } from "~/appwrite/auth";
import type { Route } from "./+types/all-users"

export const loader = async () => {
    const { users, total } = await getAllUsers(27, 0);

    return { users, total };
}



const AllUsers = ({ loaderData }: Route.ComponentProps) => {
    const { users } = loaderData;
    const gridTemplate = (props) => {
        console.log('UserData imageUrl:', props);
        const src = props.imageUrl || '/assets/images/david.webp';
        return (<div className='image'>
            <img src={src} alt={props.imageUrl}/>
        </div>);
    };
   // console.log(users);
    return (
        <main className="all-users wrapper">
            <Header
                title="Manage Users"
                description="Filter, sort, and access detailed user profiles"
            />

            <GridComponent dataSource={users} gridLines="None"
                           allowSorting={true} // ✅ Enables sorting
                           allowFiltering={true} // ✅ Enables filtering
                           allowPaging={true} // Optional: Enables pagination
                           pageSettings={{ pageSize: 10 }}>
                <ColumnsDirective>
                    <ColumnDirective headerText='Employee Image' width='180' template={gridTemplate} textAlign='Center'/>
                    <ColumnDirective 
                        field="name"
                        headerText="Name"
                        width="200"
                        textAlign="Left"
                        //template={NameTemplate}
                         /* template={(props: UserData) => {
                            console.log('UserData name:', props.name, 'Type:', typeof props.name);
                            return (
                                <div className="flex items-center gap-1.5 px-4 ">
                                    <img src={props.imageUrl} alt="user" className="rounded-full size-8 aspect-square " referrerPolicy="no-referrer" />
                                    <span>{props.name}</span>
                                </div>
                            )}}   */ 
                    />
                    <ColumnDirective
                        field="email"
                        headerText="Email Address"
                        width="200"
                        textAlign="Left"
                    />
                    <ColumnDirective
                        field="joinedAt"
                        headerText="Date Joined"
                        width="140"
                        textAlign="Left"
                        /*  template={({ joinedAt }: { joinedAt: string }) => formatDate(joinedAt)}  */
                    />
                    <ColumnDirective
                        field="status"
                        headerText="Type"
                        width="100"
                        textAlign="Left"
                        /*  template={({ status }: UserData) => (
                            <article className={cn('status-column', status === 'user' ? 'bg-success-50' : 'bg-light-300')}>
                                <div className={cn('size-1.5 rounded-full', status === 'user' ? 'bg-success-500' : 'bg-gray-500')} />
                                <h3 className={cn('font-inter text-xs font-medium', status === 'user' ? 'text-success-700' : 'text-gray-500')}>
                                    {status}
                                </h3>
                            </article>
                        )}  */
                    />
                </ColumnsDirective>
                <Inject services={[Sort, Filter, Page, Toolbar]} />
            </GridComponent>
        </main>
    )
}
export default AllUsers  