import Swal from "sweetalert2";



const EachMember = ({ user }) => {
    const handleInfoPopup = () => {
        Swal.fire({
            html: `
              <p class="mb-5"><strong>ID:</strong> ${user._id}</p>
              <p class="my-2"><strong>Name:</strong> ${user.name}</p>
              <p class="my-2"><strong>Email:</strong> ${user.email}</p>
              <p class="my-2"><strong>Department:</strong> ${user.department}</p>
              <p class="my-2"><strong>Salary:</strong> $${user.salary}</p>
              <p class="my-2"><strong>Gender:</strong> ${user.gender}</p>
            `,
            icon: 'info',
        });
    }
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={user?.img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-sm opacity-50">{user?.age}</div>
                    </div>
                </div>
            </td>
            <td>
                {user?.department}
                <br />
                <span className="badge badge-ghost badge-sm">{user?.email}</span>
            </td>
            <td>{user?.gender}</td>
            <th>
                <button onClick={handleInfoPopup} className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}
export default EachMember