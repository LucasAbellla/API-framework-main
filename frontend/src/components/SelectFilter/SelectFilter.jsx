import "./SelectFilter.css";

function SelectFilter({

    label,

    value,

    onChange,

    options

}) {

    return (

        <div className="select-filter">

            <label>{label}</label>

            <select

                value={value}

                onChange={(e)=>onChange(e.target.value)}

            >

                <option value="">

                    Todos

                </option>

                {options.map(option=>(

                    <option

                        key={option.id}

                        value={option.id}

                    >

                        {option.name}

                    </option>

                ))}

            </select>

        </div>

    );

}

export default SelectFilter;