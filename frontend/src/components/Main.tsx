
type Props = {
    children?: JSX.Element,
};

export const Main: React.FC<Props> = (props) => {

    return (
        <main className="w-full h-full min-h-screen py-5 px-5 bg-myGray-1">
            <div className="bg-white px-5 py-5">
                {props.children}
            </div>
        </main>
    )
}