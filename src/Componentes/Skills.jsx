
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';


export const Skills = () => {
    
    const [value1] = useState(90);
    const [value3] = useState(40);
    const [value4] = useState(60);
    const [value5] = useState(40);
    const [value6] = useState(40);
    const [value7] = useState(40);
    const [value8] = useState(20);
    const [value9] = useState(10);
    const [value10]=useState(40);
    const [value11]=useState(30);

    return (
        <div className='card-container'>
            <div className='cont-all-skills'>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">HTML/CSS</h5>
                            <Knob value={value1} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Python</h5>
                            <Knob value={value3} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">JavaScript</h5>
                            <Knob value={value4} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Json</h5>
                            <Knob value={value5} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
            </div>
            <div className='cont-all-skills'>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">C/C++</h5>
                            <Knob value={value6} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">React</h5>
                            <Knob value={value7} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Bootstrap</h5>
                            <Knob value={value8} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">SQLite</h5>
                            <Knob value={value9} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Photoshop</h5>
                            <Knob className="knob" value={value10} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
            </div>
            <div className='cont-all-skills'>
                <div className="card">
                    <div className="grid formgrid text-center">                 
                        <div className="field col-12 md:col-4">
                            <h5 className="mt-3">Node JS</h5>
                            <Knob value={value11} textColor="white" valueTemplate={"{value}%"} valueColor={"rgb(156, 6, 231)"} rangeColor={"rgba(92, 88, 94, 0.629)"} readOnly/>
                        </div>                   
                    </div>
                </div>
                
            </div>
        </div>
    )
}
                 