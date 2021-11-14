import {CGFobject} from '../lib/CGF.js';

export class MyTriangleSmall extends CGFobject{
    constructor(scene) {
		super(scene);
		this.initBuffers();
    }

    initBuffers() {
		this.vertices = [
			0, 1, 0,	//0
			-1, 0, 0,	//1
			1, 0, 0,    //2
			0, 1, 0,	//0
			-1, 0, 0,	//1
            1, 0, 0    //2
		];

		this.texCoords=[
			0.5, 0.5,	//0
			1, 0,		//1
			1, 1,		//2
			0.5, 0.5,	//0
			1, 0,		//1
			1, 1,		//2
		];

		this.normals = [
			0, 0, 1,	//0
			0, 0, 1,	//1
			0, 0, 1,	//2
			0, 0, -1,	//0
			0, 0, -1,	//1
			0, 0, -1	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}