function AddContact({ onAdd }) {
    const button = {
        backgroundColor: "#1b7a5a",
        color: "#ffffff",
        border: "none",
        padding: "10px 18px",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "0.95rem",
        cursor: "pointer",
        position: "absolute",
        top: "20px",
        left: "90%"
    };

    return (
        <button style={button} onClick={onAdd}>
            + Add Contact
        </button>
    );
}

export default AddContact;