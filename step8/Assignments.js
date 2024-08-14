

import AssignmentList from "./AssignmentList.js"

export default {

    components: { AssignmentList },

    template: `
         <section class=""space-y-6>
             <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
             <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>  

             <form  @submit.prevent="add" >
             <div class="border border-gray-600 text-black" >
               <input v-model="newAssignment" placeholder="new assignment" class="p-2" />
               <button class="bg-white p-2 border-l">Add</button>
               </div>
             </form>
          </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],
            newAssignment: ''
        }
    },

    computed: {

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.newAssignment.length + 1
            })
            this.newAssignment = ''
        }
    }

}