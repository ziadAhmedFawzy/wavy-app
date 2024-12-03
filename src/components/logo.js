export default function Logo(props) {
    return (
        <img src={require("../public/logo/wivy_logo1.png")} alt="logo_wavy"
            style={{
                margin: `${props.spaceHeight} ${props.spaceWidth}`,
                width: props.size
            }}
        />
    )
}