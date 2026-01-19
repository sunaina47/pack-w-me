export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <div className="item-left">
        <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </div>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
