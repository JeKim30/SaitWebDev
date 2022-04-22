function TechnologySummary() {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title">Technology Summary</h2>
                    <hr />
                    <div className="row">
                        <div className="col-sm">
                            <h6 className="fw-bold">Languages</h6>
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item">Java</li>
                                <li class="list-group-item">React</li>
                                <li class="list-group-item">Bootstrap</li>
                                <li class="list-group-item">Javascript</li>
                                <li class="list-group-item">HTML</li>
                                <li class="list-group-item">CSS</li>
                                <li class="list-group-item">SQL</li>
                                <li class="list-group-item">PL/SQL</li>
                                <li class="list-group-item">Arduino C</li>

                            </ul>
                        </div>
                        <div className="col-sm">
                            <h6 className="fw-bold">Tools</h6>
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item">Visual Studio Code</li>
                                <li class="list-group-item">Eclipse</li>
                                <li class="list-group-item">MariaDB</li>
                                <li class="list-group-item">Figma</li>
                                <li class="list-group-item">Arduino IDE</li>
                                <li class="list-group-item">PlatformIO</li>
                            </ul>
                        </div>
                        <div className="col-sm">
                            <h6 className="fw-bold">Currently Learning</h6>
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item">C#</li>
                                <li class="list-group-item">.NET</li>
                                <li class="list-group-item">Python</li>
                                <li class="list-group-item">C++ (embedded)</li>
                                <li class="list-group-item">C (embedded)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TechnologySummary;
